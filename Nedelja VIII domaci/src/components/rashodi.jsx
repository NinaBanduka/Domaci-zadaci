import rashodi from "./forma"

const PrikazRashoda = ({rashodi}) => {
return (
<div>
{rashodi.map(rashod => <p>
Opis: {rashod.opis}
Iznos: {rashod.iznos}
</p> )}
</div>
);
}
export default PrikazRashoda;