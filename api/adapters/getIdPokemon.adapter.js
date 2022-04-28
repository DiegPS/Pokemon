import axios from "axios"
function getIdPokemon(url) {
  return axios.get(url)
    .then(({ data:
      { height, weight, name, id, sprites:
        { other:
          { dream_world:
            { front_default:
              image }
          }
        },
        stats:
        [hp, attack, defense, specialAttack, specialDefense, speed],
        types:
        [firstType, OptionalType]
      }
    }) =>
    ({
      exact:
        { height, weight, name, id, image, },
      edit:
        { hp, attack, defense, specialAttack, specialDefense, speed, firstType, OptionalType }
    }))
    .then((
      { exact,
        edit:
        { hp: { base_stat: hp },
          attack: { base_stat: attack },
          defense: { base_stat: defense },
          specialAttack: { base_stat: specialAttack },
          specialDefense: { base_stat: specialDefense },
          speed: { base_stat: speed },
          firstType: { type: { name: firstType } },
          OptionalType
        }
      }) => {
      const types = [firstType]
      if (OptionalType) {
        const { type: { name: secondType } } = OptionalType
        types.push(secondType)
      }
      return ({ ...exact, hp, attack, defense, specialAttack, specialDefense, speed, types })
    })
}
export default getIdPokemon