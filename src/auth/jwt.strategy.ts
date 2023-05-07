import { ExtractJwt, Strategy } from 'passport-jwt';

import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.JWT_SECRET||'qwerty@21',
        });
      }
    
      async validate(payload: any) { //User._id y User.name
        return { userId: payload.id, username: payload.name };
      }
}