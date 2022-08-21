import { UserEntity } from "./Entities/UserEntity.js";

const user = new UserEntity({
  name: 'Carlos',
  password: '123',
  email: 'emaildahora@gmail.com',
  image: 'algumaimagem.com'
});

try {
  user.addCharacter(
    {
      name: 'Rick',
      image: 'imageRick.com'
    }
  )
  user.addCharacter(
    {
      name: 'Sova',
      image: 'imageSova.com'
    }
  )
  user.addCharacter(
    {
      name: 'Morty',
      image: 'imageMorty.com'
    }
  )
  user.addCharacter(
    {
      name: 'Reyna',
      image: 'imageReyna.com'
    }
  )
  console.log(user.getUser());
} catch (e) {
  console.log(e.message);
}