import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { friendRequestStatus } from "src/common/enums/friends-requets.enum";


@Schema({timestamps : true})
export class FriendRequest extends Document{

    @Prop({type: Types.ObjectId, ref: 'User',required : true})
    requester : Types.ObjectId

    @Prop({type: Types.ObjectId, ref: 'User',required : true})
    requestee : Types.ObjectId

    @Prop({enum : friendRequestStatus , required : true})
    status : friendRequestStatus

}

export const friendRequestSchema = SchemaFactory.createForClass(FriendRequest)