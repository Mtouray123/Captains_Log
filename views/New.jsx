const React = require('react');
const DefaultLayout = require('./layout/Default');


function New() {
    return (
        <DefaultLayout title="New Log Entry">

            <form action='/logs' method='POST'>

                Title: <input type="text" name="Title"/>
                <br/>

                Entry: <input type="textarea" name="Entry"/>
                <br/>

                ShipIsBroken: <input type='checkbox'
                name="ShipIsBroken"
                />
                <br/>

                <input type="submit" value="Create New Log"/>

            </form>
        </DefaultLayout>
    )
}

module.exports = New;