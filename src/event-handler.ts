import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class EventHandler {
	
	@OnEvent('hello.created', { async: true })
	handleHelloEvent(payload) {
		console.log("HELLO EVENT", payload);
	}
}