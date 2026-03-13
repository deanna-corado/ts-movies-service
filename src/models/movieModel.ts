import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../config/db';

export class Movie extends Model<InferAttributes<Movie>, InferCreationAttributes<Movie>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare director: string;
}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'movies',
    timestamps: false,
  }
);

export default Movie;
