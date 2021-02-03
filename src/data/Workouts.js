import { UnitType } from '@/application/enums/Units.js';
import { WorkoutType } from '@/application/enums/Workout.js';
import Workout from '../application/models/Workout.js';

export default [
  new Workout(1, 'Air Bicycle', 25, 80, 4, WorkoutType.BELLY, UnitType.EXERCISES, 'Breng je linker elleboog naar rechterbeen knie en vervolgens andersom. Één oefening is aar beide kanten uithalen.'),
  new Workout(2, 'Planken', 120, 300, 20, WorkoutType.BELLY, UnitType.SECONDS, 'Planken'),
  new Workout(3, 'Opdrukken', 40, 150, 5, WorkoutType.ARMS, UnitType.EXERCISES, 'Opdrukken'),
  new Workout(4, 'Plank to push up', 30, 80, 5, WorkoutType.BELLY, UnitType.EXERCISES, 'Neem de plankhouding aan en klim met je handen een voor een op naar de opdrukhouding ofwel voorligsteun. Wanneer je in deze positie bent druk je één keer op. Ga weer terug in plankhouding en herhaal.'),
  new Workout(5, 'Leg raises', 30, 60, 3, WorkoutType.BELLY, UnitType.EXERCISES, 'Ga op je rug op de grond liggen met je voeten wijzend naar het plafond. Vanuit deze positie laat je je voeten richting de grond zakken, maar let op: ga niet helemaal naar beneden zodat je buik op spanning blijft. Til je voeten daarna weer op naar de beginpositie.'),
  new Workout(6, 'Plank rotatie', 30, 80, 5, WorkoutType.BELLY, UnitType.EXERCISES, 'Neem je voorligsteun aan en til je linkerarm op met je hand richting het plafond. Laat je voeten in dezelfde positie staan, waardoor je alleen je romp en bovenlichaam naar de zijkant draait. Houd dit een paar seconden vast en zet je hand weer op de grond. Herhaal dit met je rechterarm.'),
  new Workout(7, 'Dips', 30, 80, 5, WorkoutType.ARMS, UnitType.EXERCISES, 'Plaats je handpalmen (achterwaarts) op de bank en houd je benen gestrekt met het puntje van de hak op de grond. Zak door je armen en duw jezelf terug omhoog.'),
  new Workout(8, 'Armen draaien', 50, 110, 10, WorkoutType.SHOULDER, UnitType.EXERCISES, 'Zorg dat je jouw rondje zo klein mogelijk draait. En houd dit voor een zo lang mogelijke tijd vast.'),
  new Workout(9, 'Zijwaards planken met arm liften', 20, 60, 5, WorkoutType.ARMS, UnitType.EXERCISES, 'Zijwaards planken en het liften van een arm omhoog. Dit doe je voor zowel linker als rechterkant.'),
  new Workout(10, 'Squat', 20, 60, 4, WorkoutType.LEGS, UnitType.EXERCISES),
  new Workout(11, 'Brigde', 20, 60, 5, WorkoutType.LEGS, UnitType.EXERCISES, 'Gaat op je rug liggen op de grond, strekt je armen naast je lichaam en zet voeten recht op de grond. Daarna richt je kont naar boven en weer rustig naar beneden.'),
  new Workout(12, 'Voorwaats lunge', 20, 60, 4, WorkoutType.LEGS, UnitType.EXERCISES, 'Staat rechtop, stap met rechter been uit naar voren en houdt het linker been gestrekt. Daarna stap terug en herhaal met linker been.'),
  new Workout(13, 'Zijwaarts lunge', 20, 60, 4, WorkoutType.LEGS, UnitType.EXERCISES, 'Staat rechtop, stapt met recht been zijwaarts uit en houdt linker been gestrekt. Dit doe je zo vaak als nodig en daarna met het linker been'),
  new Workout(14, 'Kruislinkgse lunge', 20, 60, 4, WorkoutType.LEGS, UnitType.EXERCISES, 'Staat rechtop, stapt met het rechtbeen achterwaats achter het linkerbeen uit, daarna herhaling van linker been'),
  new Workout(15, 'Onderbeen', 20, 80, 5, WorkoutType.UNDER_LEG, UnitType.EXERCISES, 'Staat rechtop en gaat vervolgens op je tenenstaan. Een zwaardere oefening is dit op de trap doen.'),
  new Workout(16, 'Leg raise backwards', 20, 60, 5, WorkoutType.LEGS, UnitType.EXERCISES, 'Gaat op handen en knieën staan. Doet vervolgens het rechterbeen naar achtere strekken en daarna het linkerbeen.'),
];
