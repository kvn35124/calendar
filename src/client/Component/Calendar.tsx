import * as React from 'react';
import * as moment from 'moment';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Calendar = () => {
	return (
		<table className="justify-content-center">
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
	);
};

export default Calendar;
