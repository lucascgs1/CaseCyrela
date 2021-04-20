import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Occurrence } from "../entity/Occurrence";
import { FindOptionBuilder } from 'tofo';

export class OccurrenceController {

    private occurrenceRepository = getRepository(Occurrence);

    async all(request: Request, response: Response, next: NextFunction) {
        try {
            const builder = new FindOptionBuilder(request.query);
            // Set allowed fields
            builder.setAllowedFields(['limit', 'pagination', 'page', 'order', 'select']); // commons
            builder.setAllowedFields(['id', 'ticketnumber', 'pjo_clientedaunidade', 'pjo_empreendimentoid', 'pjo_bloco', 'pjo_unidade', 'pjo_bandeira', 'description']); // table fields

            // Build query
            const builtQuery = builder.build();
            const all = await this.occurrenceRepository.find(builtQuery);
            return response.status(200).json({
                message: "find all operation success.",
                data: all,
            });
        } catch (error) {
            return response.status(400).json({
                message: "find all operation failed, try again.",
                info: error,
            });
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params;
        try {
            const one = await this.occurrenceRepository.findOne(id);
            return response.status(200).json({
                message: "find operation success.",
                data: one,
            });
        } catch (error) {
            return response.status(400).json({
                message: "find operation failed, try agaain.",
                info: error,
            });
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const created = await this.occurrenceRepository.save(request.body);
            response.status(201).json({
                message: "create operation success.",
                data: created,
            });
        } catch (error) {
            response.status(400).json({
                message: "create operation failed, try again.",
                info: error,
            });
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params;
        try {
            await this.occurrenceRepository.delete(id);
            return response.sendStatus(200).json({ message: "delete operation success." });
        } catch (error) {
            return response.status(400).json({
                message: "delete operation failed, try again.",
                info: error,
            });
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const { id } = request.params;
        try {
            const updated = await this.occurrenceRepository.update(
                id,
                request.body
            );
            return response.status(200).json({
                message: "update operation success.",
                data: updated,
            });
        } catch (error) {
            return response.status(400).json({
                message: "update operation failed, try again.",
                info: error,
            });
        }
    }
}