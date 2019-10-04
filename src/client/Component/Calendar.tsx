import * as React from 'react';
import moment = require('moment');



const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Calendar = () => {

    return (
            <table className="justify-content-center" border="1">
                    <tr>
                        {daysOfWeek.map(dayOfWeek => (
                            <th className="header">{dayOfWeek}</th>
                        ))}
                    </tr>
                    <tr>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                    </tr>
                    <tr>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                    </tr>
                    <tr>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                    </tr>
                    <tr>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                    </tr>
                    <tr>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                        <th className="body"></th>
                    </tr>
            </table>
    )
}






export default Calendar;