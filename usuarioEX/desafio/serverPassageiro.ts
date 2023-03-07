import { Request, Response } from "express";
import AppDataSource from "../desafio/database";
import { paises } from "../desafio/modelUsuario";

export class serverPassageiro {
  async create(req: Request, res: Response) {
    let {nomePais} : {
      nomePais: string;
    } = req.body;

    let pais = new paises();
    pais.nomePais = nomePais;

    const repo = AppDataSource.getRepository(paises);
    pais = repo.create(pais);
    await repo.save(pais);

    res.json(pais);
  }

  
  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(paises);
    const pais = await repo.findOneBy({ paisId: parseInt(id, 10) });

    res.json(pais);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nomePais } = req.body;

    const repo = AppDataSource.getRepository(paises);
    const pais = await repo.findOneBy({ paisId: parseInt(id, 10) });
    pais.nomePais = nomePais;

    await repo.save(pais);
    res.json(pais);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(paises);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar paises" });
  }
}
