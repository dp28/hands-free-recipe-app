import { buildFocusChain } from '../components/Focus';

export default function loadInitialState() {
  return {
    ui: {
      focus: buildFocusChain(['recipe', 'ingredients', 0]),
    },
    recipe: {
      title: 'Fat Rascals',
      ingredients: [
        '150g/5¼oz plain flour',
        '150g/5¼oz self-raising flour',
        '1 tsp baking powder',
        '65g/2¼oz lard, diced',
        '65g/2¼oz unsalted butter, diced',
        '90g/3¼oz caster sugar',
        '1 orange, zest only',
        '1 lemon, zest only',
        '1 tsp ground cinnamon',
        '½ tsp freshly grated nutmeg',
        '50g/1¾oz currants',
        '50g/1¾oz raisins',
        '50g/1¾oz sultanas',
        '50ml/1¾fl oz double cream',
        '2 free-range eggs, beaten',
        '50g/1¾oz glacé cherries',
        '50g/1¾oz blanched almonds',
        '100g/3½oz clotted cream',
        '70g/2½oz strawberry jam',
        '50g/1¾oz unsalted butter',
      ],
      method: [
        'Preheat the oven to 200C/400F/Gas 6. Line a baking tray with greaseproof paper.',
        'Sieve the flours into a bowl and stir in the baking powder.',
        'Add the diced lard and butter and rub into the flour using your fingers until the mixture resembles fine breadcrumbs.',
        'Add the sugar, orange zest, lemon zest, cinnamon, nutmeg and dried fruit and mix until well combined.',
        'Stir in the cream and half of the beaten egg until the mixtures comes together as a dough. Cut the dough into six pieces, shape into large rounds, 2cm/1in deep and place onto the prepared baking tray.',
        'Brush the remaining beaten egg over the top of the \'rascals\' and top with the glacé cherries and blanched almonds.',
        'Bake in the oven for 15-20 minutes, or until golden-brown. Remove from the oven and set aside to cool slightly.',
        'Serve warm with the clotted cream, jam and butter.',
      ]
    }
  };
}
