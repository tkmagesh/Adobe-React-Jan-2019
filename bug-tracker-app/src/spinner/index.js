import React from 'react';

let Spinner = ({ value, up, down, doubleUp }) => (
	<section>
		<input type="button" value="DOWN" onClick={down}/>
		<span> [ {value} ] </span>
		<input type="button" value="UP" onClick={up}/>
		<input type="button" value="double Up" onClick={doubleUp}/>
	</section>
);

export default Spinner;