# Roster

### Backend

<table>
  <tr>
    <th>Name & Description</th>
    <th>HTTP Method</th>
    <th style="width:18%">Data Types</th>
    <th style="width:32%">Exceptions</th>
  </tr>

  <tr>
    <td><code>auth/login</code><br /><br />Given a registered user's <code>email</code> and <code>password</code>, returns their <code>authUserId</code> value.</td>
    <td>POST</td>
    <td><b>Body Parameters:</b><br /><code>( email, password )</code><br /><br /><b>Return type if no error:</b><br /><code>{ token, authUserId }</code></td>
    <td>
      <b>400 Error</b> when any of:
      <ul>
        <li><code>email</code> entered does not belong to a user</li>
        <li><code>password</code> is not correct</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><code>auth/register</code><br /><br />Given a user's first and last name, email address, and password, creates a new account for them and returns a new <code>authUserId</code>.<br /><br />A unique handle will be generated for each registered user. The user handle is created as follows:
      <ul>
        <li>First, generate a concatenation of their casted-to-lowercase alphanumeric (a-z0-9) first name and last name (i.e. make lowercase then remove non-alphanumeric characters).</li>
        <li>If the concatenation is longer than 20 characters, it is cut off at 20 characters.</li>
        <li>If this handle is already taken by another user, append the concatenated names with the smallest number (starting from 0) that forms a new handle that isn't already taken.</li>
        <li>The addition of this final number may result in the handle exceeding the 20 character limit (the handle 'abcdefghijklmnopqrst0' is allowed if the handle 'abcdefghijklmnopqrst' is already taken).</li>
      </ul>
    </td>
    <td>POST</td>
    <td><b>Body Parameters:</b><br /><code>( email, password, nameFirst, nameLast )</code><br /><br /><b>Return type if no error:</b><br /><code>{ token, authUserId }</code></td>
    <td>
      <b>400 Error</b> when any of:
      <ul>
        <li><code>email</code> entered is not a valid email</li>
        <li><code>email</code> is already being used by another user</li>
        <li>length of <code>password</code> is less than 6 characters</li>
        <li>length of <code>nameFirst</code> is not between 1 and 50 characters inclusive</li>
        <li>length of <code>nameLast</code> is not between 1 and 50 characters inclusive</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><code>rosters/create</code><br /><br />Creates a new named roster.</td>
    <td>POST</td>
    <td><b>Body Parameters:</b><br /><code>( name )</code><br /><br /><b>Return type if no error:</b><br /><code>{ rosterId }</code></td>
    <td>N/A</td>
  </tr>

  <tr>
    <td><code>rosters/list</code><br /><br />Provides an array of all rosters that the user is a part of.</td>
    <td>GET</td>
    <td><b>Query Parameters:</b><br /><code>( )</code><br /><br /><b>Return type if no error:</b><br /><code>{ rosters }</code></td>
    <td>N/A</td>
  </tr>

  <tr>
    <td><code>roster/info</code><br /><br />Given a <code>rosterId</code> that the authorised user is a member of, provides details about the roster.</td>
    <td>GET</td>
    <td><b>Query Parameters:</b><br /><code>( rosterId )</code><br /><br /><b>Return type if no error:</b><br /><code>{ rosterId, rosterName, owner, members, roster }</code></td>
    <td>
      <b>400 Error</b> when:
      <ul>
        <li><code>rosterId</code> does not refer to a valid roster</li>
      </ul>
      <b>403 Error</b> when:
      <ul>
        <li><code>rosterId</code> is valid and the authorised user is not a member of the roster</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><code>roster/add</code><br /><br />Given a <code>rosterId</code> and <code>userId</code>, add the person to the roster.</td>
    <td>POST</td>
    <td><b>Body Parameters:</b><br /><code>( rosterId )</code><br /><br /><b>Return type if no error:</b><br /><code>{ }</code></td>
    <td>
      <b>400 Error</b> when:
      <ul>
        <li><code>rosterId</code> does not refer to a valid roster</li>
      </ul>
      <b>403 Error</b> when:
      <ul>
        <li><code>rosterId</code> is valid and the user is not a member/owner (admin) of the roster</li>
      </ul>
    </td>
  </tr>

  <tr>
    <td><code>user/setavailability</code><br /><br />Given a <code>userId</code> set user's availabilities to work.</td>
    <td>PUT</td>
    <td><b>Body Parameters:</b><br /><code>( userId )</code><br /><br /><b>Return type if no error:</b><br /><code>{ }</code></td>
    <td>
      <b>400 Error</b> when:
      <ul>
        <li><code>userId</code> does not refer to a valid user</li>
      </ul>
    </td>
  </tr>

</table> 

### <u>Frontend</u>

### Feature Set 1: Login

#### 1.1 Login Screen
 * A unique route must exist for this screen
 * User must be able to enter their `email` and `password` in a form
 * A button must exist to allow submission of the form
 * If the form submission fails when user tried to login, a reasonable error message should be shown
 * The login form must be able to be submitted on enter key, pressing enter key to login should be an alternative option along with clicking a button
 * Successful login will take user to the dashboard screen

#### 1.2. Register Screen
 * A unique route must exist for this screen
 * User must be able to enter their `email` and `password` and `name` in a form
 * A confirm `password` field should exist where user re-enters their password
 * If the two passwords don't match, the user should receive an error popup before submission.
 * If the form submission fails when user tried to register, a reasonable error message should be shown
 * A button must exist to allow submission of form
 * The register form must be able to be submitted on enter key, pressing enter key to register should be an alternative option along with clicking a button
 * Successful register will take user to the dashboard screen

 #### 1.3. Logout Button
 * On the dashboard screen, a logout button should exist.
 * This logout button, when clicked, returns you to the login screen.