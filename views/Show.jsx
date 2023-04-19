const React = require('react');

function Show(props) {
  return (
    <DefaultLayout title={props.log.title}>
      <h2>{props.log.title}</h2>
      <p>{props.log.entry}</p>
      <p>Ship is {props.log.shipIsBroken ? 'broken' : 'not broken'}</p>
      <a href="/logs">Back to Index</a>
      <a href={`/logs/${props.log._id}/edit`}>Edit</a>
      <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
        <input type="submit" value="Delete"/>
      </form>
    </DefaultLayout>
  );
}

module.exports = Show;