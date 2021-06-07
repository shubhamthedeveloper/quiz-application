import { CreateOptionDto } from './dto/option.dto';
import { Option } from './entities/option.entity';
import { Repository } from 'typeorm';
export declare class OptionService {
    private optRepository;
    constructor(optRepository: Repository<Option>);
    createOption(createOptionDto: CreateOptionDto): Promise<Option>;
    getOpt(id: number): Promise<Option[]>;
    getOptById(id: number): Promise<Option>;
    updateOptStatus(id: number, status: boolean): Promise<Option>;
}
