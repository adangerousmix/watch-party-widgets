# Watch Party Widgets for StreamElements

The Watch Party Widgets include a timer, poster and title. They are designed to help you run a watch party using the Twitch Watch Party feature or your own. Use any combination of the widgets for your overlay.

_Note: The poster widget requires an API key for <a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a>._

For more details, please visit the [ADangerousMix website](https://adangerousmix.com/wp).

## Install Widgets

For each widget, add a new custom widget to StreamElements and then copy the corresponding file contents to the tab within the custom widget.

## Twitch Chat Commands

<h3>Twitch Chat Commands</h3>
<p>Only broadcasters have the permissions to execute the watch party commands.</p>
<table>
    <thead>
        <tr>
            <th>Command</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>!wpreset</td>
            <td>
                <p>This command will reset the timer to the countdown you've specified.</p>
            </td>
            <td>
                <pre>!wpreset</pre>
            </td>
        </tr>
        <tr>
            <td>!wpstart</td>
            <td>
                <p>This command will set the timer to 0 and be when everyone should start the show.</p>
            </td>
            <td>
                <pre>!wpstart</pre>
            </td>
        </tr>
        <tr>
            <td>!wpadd [seconds]</td>
            <td>
                <p>This command will add the specified amount of seconds to the timer.</p>
            </td>
            <td>
                <pre>!wpadd 5</pre>
            </td>
        </tr>
        <tr>
            <td>!wpsub [seconds]</td>
            <td>
                <p>This command will subtract the specified amount of seconds from the timer.</p>
            </td>
            <td>
                <pre>!wpsub 5</pre>
            </td>
        </tr>
        <tr>
            <td>!wpset [seconds]</td>
            <td>
                <p>This command will set the timer to the specified amount of seconds.</p>
            </td>
            <td>
                <pre>!wpset -300</pre>
            </td>
        </tr>
    </tbody>
</table>