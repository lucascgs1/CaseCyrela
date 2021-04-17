import { AssistanceController } from "./controller/AssistanceController";
import { OccurrenceController } from "./controller/OccurrenceController";

export const Routes = [
    {
        method: "get",
        route: "/assistance",
        controller: AssistanceController,
        action: "all"
    }, {
        method: "get",
        route: "/assistance/:id",
        controller: AssistanceController,
        action: "one"
    }, {
        method: "post",
        route: "/assistance",
        controller: AssistanceController,
        action: "save"
    }, {
        method: "delete",
        route: "/assistance/:id",
        controller: AssistanceController,
        action: "remove"
    },
    {
        method: "get",
        route: "/ocorrence",
        controller: OccurrenceController,
        action: "all"
    }, {
        method: "get",
        route: "/ocorrence/:id",
        controller: OccurrenceController,
        action: "one"
    }, {
        method: "post",
        route: "/ocorrence",
        controller: OccurrenceController,
        action: "save"
    }, {
        method: "delete",
        route: "/ocorrence/:id",
        controller: OccurrenceController,
        action: "remove"
    }
];