import moment from "moment"
import 'moment/locale/fr';

export default function Redacteur({ name, date }) {

    const redacteur = () => {
        if (name == "victor autheman") {
            return (
                <>
                    <img className="w-8 rounded-full" src="/img/totor.png" alt="" /> <p className="font-body">Publié par Totor</p>
                </>
            )
        } else return (
            <>
                <img className="w-8 rounded-full" src="/img/jadou.png" alt="" /> <p className="font-body">Publié par Jadou</p>
            </>
        )
    }

    // const customDate = new Date(Date.parse(date))
    moment.locale('fr')
    const customDate = moment(date).format('DD MMMM YYYY')

    return (
        <div className="flex flex-row flex-nowrap items-center gap-2 text-white/50 font-body ">
            {redacteur()}-<p>le {customDate}</p>
        </div>

    )
}