import prihodi from "./forma";

const PrikazPrihoda = ({prihodi}) => {
return (
<div>
{prihodi.map(prihod => <p>
Opis: {prihod.opis}
Iznos: {prihod.iznos}
</p> )}
</div>
);
}
export default PrikazPrihoda;