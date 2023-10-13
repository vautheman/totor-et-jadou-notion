import moment from "moment"
import 'moment/locale/fr';

export default function RedacteurCard({ name, date }) {

    const redacteur = () => {
        if (name == "victor autheman") {
            return (
                <>
                    <img className="w-4 rounded-full" src="/img/totor.png" alt="" /> <p className="font-body text-xs text-gray">Par Totor</p>
                </>
            )
        } else return (
            <>
                <img className="w-4 rounded-full" src="/img/jadou.png" alt="" /> <p className="font-body text-xs text-gray">Par Jadou</p>
            </>
        )
    }

    // const customDate = new Date(Date.parse(date))
    moment.locale('fr')
    const customDate = moment(date).format('DD MMMM YYYY')

    return (
        <div className="flex flex-row flex-nowrap items-center gap-1 font-body">
            {redacteur()}
        </div>

    )
}