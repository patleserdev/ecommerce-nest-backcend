import { Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { JwtUserPayload } from './jwt-user-payload.js';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: JwtUserPayload): Promise<import("../../users/entities/user.entity").User>;
}
export {};
