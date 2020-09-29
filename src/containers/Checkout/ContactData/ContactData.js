import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";

import Classes from "./ContactData.module.css";

export class ContactData extends Component {
	state = {
		name: "",
		email: "",
		address: {
			street: "",
			postalCode: "",
		},
	};
	render() {
		return (
			<div className={Classes.ContactData}>
				<h4>Enter your contact info</h4>
				<form action="">
					<input
						className={Classes.Input}
						type="text"
						name="name"
						placeholder="Your name"
					/>
					<input
						className={Classes.Input}
						type="email"
						name="email"
						placeholder="Your email"
					/>
					<input
						className={Classes.Input}
						type="text"
						name="street"
						placeholder="Your street"
					/>
					<input
						className={Classes.Input}
						type="text"
						name="postalCode"
						placeholder="Postal Code"
					/>
					<Button btnType="Success">ORDER</Button>
				</form>
			</div>
		);
	}
}

export default ContactData;
