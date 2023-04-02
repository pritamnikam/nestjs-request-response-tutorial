import { Injectable, Scope } from "@nestjs/common";


// Container for all request-based data that we want to share in app
@Injectable({ scope: Scope.REQUEST })
export class RequestService {
    private userId: string;

    setUserId(userId: string) {
        this.userId = userId;
    }

    getUserId() {
        return this.userId;
    }
}