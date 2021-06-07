import { Repository } from 'typeorm';
import { Option } from '../entities/option.entity';
import { CreateOptionDto } from '../dto/option.dto';
export declare class OptionRepository extends Repository<Option> {
    createOpt(createOptionDto: CreateOptionDto): Promise<Option>;
}
