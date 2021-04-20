import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Assistance } from "../entity/Assistance";
import { FindOptionBuilder } from 'tofo';

export class AssistanceController {

    private assistanceRepository = getRepository(Assistance);

    async all(request: Request, response: Response, next: NextFunction) {
        try {
            const builder = new FindOptionBuilder(request.query);
            // Set allowed fields
            builder.setAllowedFields(['limit', 'pagination', 'page', 'order', 'select']); // commons
            builder.setAllowedFields(['id', 'pjo_unidadeid', 'pjo_blocoid', 'actualstart', 'actualend', 'subject', 'pjo_tipodeatividade', 'pjo_empreendimentoid']); // table fields

            // Build query
            const builtQuery = builder.build();
            const all = await this.assistanceRepository.find(builtQuery);
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
            const one = await this.assistanceRepository.findOne(id);
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
            const created = await this.assistanceRepository.save(request.body);
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
            await this.assistanceRepository.delete(id);
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
            const updated = await this.assistanceRepository.update(
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