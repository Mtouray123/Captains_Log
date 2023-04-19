const React = require('react');

function Index(props) {
  return (
    <div>
      <h1>Logs</h1>
      <ul>
        {props.logs.map((log, index) => (
          <li key={index}>
            <a href={`/logs/${index}`}>{log.title}</a>
          </li>
        ))}
      </ul>
      <a href="/logs/new">New Log</a>
    </div>
  );
}

module.exports = Index;