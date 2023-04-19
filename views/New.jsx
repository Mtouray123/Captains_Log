const React = require('react');
const DefaultLayout = require('./layout/Default');


function New() {
    return (
        <DefaultLayout title="New Log Entry">

            <form action='/logs' method='POST'>

                Title: <input type="text" name="title"/>
                <br/>

                Entry: <input type="textarea" name="entry"/>
                <br/>

                ShipIsBroken: <input type='checkbox'
                name="shipIsBroken" value="true"
                />
                <br/>

                <input type="submit" value="Create New Log"/>

            </form>
        </DefaultLayout>
    )
}

module.exports = New;