import { useState } from "react";

import "./styles.scss";

function MineSiteOverview(props) {

	return (
		<div className="mine-site-overview" rand={console.log(props.names)}>
			Mine Site Overview
			<ul>
				{[].concat(props.names).sort()
					.map((val, index) => (
						<li key={index}>{val}</li>
					))}
			</ul>
		</div>
	);
}

export default MineSiteOverview;
