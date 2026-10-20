import { InferSchemaType, model, Schema } from 'mongoose';

// const schemaDefinition = {
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   dateOfBirth: {
//     type: Date,
//     required: true,
//   },
// };

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
  },
  {
    virtuals: {
      fullName: {
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
      },
    },
    timestamps: true,
  },
);

type TUser = InferSchemaType<typeof userSchema> & {
  fullName: string;
};

export const User = model<TUser>('User', userSchema);
