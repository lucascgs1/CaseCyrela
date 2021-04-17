import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Occurrence } from "../entity/Occurrence";
import { FindOptionBuilder } from 'tofo';

export class OccurrenceController {

    private occurrenceRepository = getRepository(Occurrence);

    async all(request: Request, response: Response, next: NextFunction) {
        const builder = new FindOptionBuilder(request.query);
        // Set allowed fields
        builder.setAllowedFields(['limit', 'pagination', 'page', 'order', 'select']); // commons
        builder.setAllowedFields(['id', 'ticketnumber', 'pjo_clientedaunidade', 'pjo_empreendimentoid', 'pjo_bloco', 'pjo_unidade', 'pjo_bandeira', 'description']); // table fields

        // Build query
        const builtQuery = builder.build();

        return this.occurrenceRepository.find(builtQuery);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.occurrenceRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.occurrenceRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let toRemove = await this.occurrenceRepository.findOne(request.params.id);
        if (toRemove.id) {
            await this.occurrenceRepository.remove(toRemove);
            return response.status(200)
        }
        return response.status(404)
    }

}