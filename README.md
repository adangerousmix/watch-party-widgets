# Twitch Watch Party Widgets for StreamElements

The Twitch Watch Party Widgets includes a timer, poster and title. They are designed to help you run a watch party using the Twitch Watch Party feature or your own. Use any combination of the widgets for your overlay.

_Note: The poster widget requires an API key for <a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a>._

For more details, please visit the [ADangerousMix website](https://adangerousmix.com/wp).

## Install Widgets

For each widget, add a new custom widget to StreamElements and then copy the corresponding file contents to the tab within the custom widget.

## Twitch Chat Commands

<p>Only broadcasters have the permissions to execute the watch party commands. The " - " (spaces included) is very important for passing along a movie's title and year or a tv show's title, year, and episode information.</p>
<table class="table-auto">
    <thead>
        <tr>
            <th>Command</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>!settitle [name] - [year]<br>!settitle [name] - [year] - S[season_number]:E[episode_number]</td>
            <td>
                <p>This command is used to set your Twitch title, but it will also set the title and poster for the show. The " - " (spaces included) is very important for passing along a movie's title and year or a tv show's title, year, and episode information.</p>
            </td>
            <td>
                <pre>!settitle Batman - 1989</pre>
                <pre>!settitle Scrubs - 2005 - S1:E1</pre>
            </td>
        </tr>
        <tr>
            <td>!wptitle [name] - [year]<br>!wptitle [name] - [year] - S[season_number]:E[episode_number]</td>
            <td>
                <p>This command will set the title and poster for the show. It will not change the Twitch title. The " - " (spaces included) is very important for passing along a movie's title and year or a tv show's title, year, and episode information.</p>
            </td>
            <td>
                <pre>!wptitle Batman - 1989</pre>
                <pre>!wptitle Scrubs - 2005 - S1:E1</pre>
            </td>
        </tr>
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