import { CreateOptionDto } from '../dto/option.dto';
import { OptionService } from '../service/option.service';
export declare class OptionResolver {
    private optService;
    constructor(optService: OptionService);
    createOption(createOptionDto: CreateOptionDto): Promise<import("../entities/option.entity").Option>;
    getOptionById(ques_id: number): Promise<import("../entities/option.entity").Option[]>;
    updateOption(id: number, status: boolean): Promise<import("../entities/option.entity").Option>;
}
