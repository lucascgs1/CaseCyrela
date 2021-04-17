import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Assistance } from "../entity/Assistance";
import { FindOptionBuilder } from 'tofo';

export class AssistanceController {

    private assistanceRepository = getRepository(Assistance);

    async all(request: Request, response: Response, next: NextFunction) {
        const builder = new FindOptionBuilder(request.query);
        // Set allowed fields
        builder.setAllowedFields(['limit', 'pagination', 'page', 'order', 'select']); // commons
        builder.setAllowedFields(['id', 'pjo_unidadeid', 'pjo_blocoid', 'actualstart', 'actualend', 'subject', 'pjo_tipodeatividade', 'pjo_empreendimentoid']); // table fields

        // Build query
        const builtQuery = builder.build();

        return this.assistanceRepository.find(builtQuery);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const result = await this.assistanceRepository.findOne(request.params.id)
        if (result) {
            return response.status(200).json(result);
        }
        return response.status(404);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const result = await this.assistanceRepository.save(request.body)
        if (result) {
            return response.status(200).json(result.id);
        }
        return response.status(500);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let toRemove = await this.assistanceRepository.findOne(request.params.id);
        if (toRemove.id) {
            await this.assistanceRepository.remove(toRemove);
            return response.status(200)
        }
        return response.status(404)
    }

}