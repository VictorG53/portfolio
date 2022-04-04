import BackButton from "../../components/backButton";
import Head from 'next/head';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';

const Page1 = () => {

    const { value } = useLoginContext();

    if (!value) {
        return <Redirect />
    }

    return (
        <>
            <Head>
                <title>Victor G. - Gérer le patrimoine informatique</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-screen h-screen bg-gray-900">
                <div className="w-full p-3 flex items-start mb-10">
                    <BackButton link="/portfolio#summary" />
                    <h1 className="text-3xl mx-auto text-white self-center text-center">Gérer le patrimoine <br /> informatique</h1>
                </div>
                <div className="flex flex-col mx-24 border border-gray-700 border-2 rounded p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Mise en place d&apos;une sauvegarde automatique de la base de donnée</h3>
                    <div className="flex items-center">
                        <p className="text-white text-justify w-2/3 mx-12 font-light">
                            Afin de garder une trace des données de la base de données Megacasting, il a fallu mettre en place une sauvegarde automatique de cette base de données.<br /><br />
                            Pour ce faire, j&apos;ai créer une tâche automatisée sur le serveur de la base de données qui exécutait un fichier Powershell. Ce fichier réalisait un &apos;Dump&apos; de la base de données toute les heures et supprimait la sauvegarde la plus vieille pour garder seulement les 25 dernières sauvegardes.
                            <br /><br />
                            Le script powershell utilisé est celui ci contre :
                        </p>
                        <div className="w-1/3 border border-gray-500 mx-12 rounded py-2 px-4 my-3">
                            <h3 className="text-gray-300 mb-2">Code de sauvegarde : </h3>
                            <p className="text-gray-400 font-extralight text-sm">
                                cd C:\backup\bdd <br />
                                If ((Get-ChildItem -File | Measure-Object).Count -ge 25)&#123; <br />
                                &nbsp;&nbsp;&nbsp;Get - ChildItem - File &#124; Sort CreationTime &#124; Select -First 1 &#124; Remove-Item<br />
                                &#125;<br /><br />

                                sqlcmd -S AD1 -U Orchard_User -P Not24get -Q<br />
                                &quot;DECLARE @path NVARCHAR(100);<br />
                                DECLARE @dbName NVARCHAR(100);<br />
                                SET @path = &apos;C:\backup\bdd\dump_&apos;+format(getdate(),&apos;yyyy-MM-dd_HH_mm_ss&apos;)+&apos;.sql&apos;;<br />
                                SET @dbName = &apos;Orchard&apos;<br />
                                BACKUP DATABASE @dbName TO DISK = @path;&quot;;<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page1;