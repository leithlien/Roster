import { getData, setData } from "./database.js"
import { createNewEmployee } from "./roster.js"

const INF = 999;

const solveFlow = () => {
  const data = getData();
  const graph = {};
  const source = {};

  for (const [name, periods] of Object.entries(data.employees)) {
    source[name] = INF;
    const adjList = {};
    for (const [period, value] of Object.entries(periods)) {
      if (value) {
        adjList[period] = 1;
        graph[period] = { 'sink': 1 };
      }
    }
    graph[name] = adjList;
  }
  graph['source'] = source;

  const res = fordFulkerson(graph, 'source', 'sink');

  res.matching.forEach(([name, period]) => {
    data.roster[period] = [];
    if (!(name === 'source' || period === 'sink')) {
      data.roster[period].push(name);
    }
  })

  setData(data);
}

function fordFulkerson(graph, source, sink) {
  const residualCapacity = new Map();
  const matching = new Set(); // Stores edges in the current matching
  let parent = new Map();

  function bfs(residualCapacity, source, sink) {
    const visited = new Set();
    const queue = [source];
    parent = new Map();
  
    while (queue.length > 0) {
      const u = queue.shift();
      visited.add(u);
  
      for (const v of residualCapacity.get(u).keys()) {
        if (!visited.has(v) && residualCapacity.get(u).get(v) > 0) {
          queue.push(v);
          visited.add(v);
          parent.set(v, u); // Record the parent for path reconstruction
        }
      }
    }
  
    return visited.has(sink); // Check if sink is reachable from source
  }

  // Create a residual network with the same capacities
  for (const [from, neighbors] of Object.entries(graph)) {
    residualCapacity.set(from, new Map());
    for (const [to, capacity] of Object.entries(neighbors)) {
      residualCapacity.get(from).set(to, capacity);
      if (!(residualCapacity.get(to))) { // Add opposite direction with 0 capacity
        residualCapacity.set(to, new Map());
      }
      residualCapacity.get(to).set(from, 0);
    }
  }

  let flow = 0;
  while (bfs(residualCapacity, source, sink)) {
    let pathFlow = Infinity;

    // Find the minimum residual capacity on the path
    for (let v = sink; v !== source; v = parent.get(v)) {
      if (parent.get(v) && residualCapacity.has(parent.get(v))) {
        pathFlow = Math.min(pathFlow, residualCapacity.get(parent.get(v)).get(v));
      }
    }

    // Update flow and residual capacities
    for (let v = sink; v !== source; v = parent.get(v)) {
      const u = parent.get(v);
      const capacity = residualCapacity.get(u).get(v);
      const newCapacity = capacity - pathFlow;

      if (capacity > 0 && newCapacity === 0) {
        matching.add([u, v]); // Add edge to matching if saturated
      } else if (capacity === 0 && newCapacity > 0) {
        matching.delete([u, v]); // Remove edge from matching if no longer saturated
      }

      residualCapacity.get(u).set(v, newCapacity);
      residualCapacity.get(v).set(u, residualCapacity.get(v).get(u) + pathFlow);
    }

    flow += pathFlow;
  }

  return { flow, matching }; // Return both flow and matching
}

export { solveFlow };
