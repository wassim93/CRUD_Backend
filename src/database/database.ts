import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://wassim:Azerty123@cluster0.csokjav.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
