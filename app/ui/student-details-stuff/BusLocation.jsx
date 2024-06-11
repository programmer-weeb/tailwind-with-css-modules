"use client"
import Link from "next/link.js";
import React from "react";

export default function BusLocation() {
	return (
		<div>
			<Link
				href="https://www.google.com/maps/dir/Alexandria/Cairo,+Cairo+Governorate/@30.6217592,29.8538218,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x14f5c49126710fd3:0xb4e0cda629ee6bb9!2m2!1d29.9187387!2d31.2000924!1m5!1m1!1s0x14583fa60b21beeb:0x79dfb296e8423bba!2m2!1d31.2357116!2d30.0444196!3e0?entry=ttu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/maps.png" alt="Description of image"/>
			</Link>
		</div>
	);
}