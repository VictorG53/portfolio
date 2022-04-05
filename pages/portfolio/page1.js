import GlowingButton from "../../components/glowingButton";
import { ArrowLeft } from "iconoir-react";
import Head from 'next/head';
import { useLoginContext } from '../../components/useContext';
import Redirect from '../redirect';
import Image from 'next/image';

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
            <div className="w-full min-h-screen bg-gray-900 lg:pb-10 pb-2">
                <div className="w-full p-3 flex items-start mb-10">
                    <GlowingButton link="/portfolio#summary"><ArrowLeft /> Back</GlowingButton>
                    <h1 className="lg:text-3xl sm:text-2xl text-xl mx-auto text-white self-center text-center">Gérer le patrimoine <br /> informatique</h1>
                </div>
                <div className="flex flex-col lg:mx-12 xl:mx-24 2xl:mx-64 mx-2 border border-gray-700 border-2 rounded-lg p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Mise en place d&apos;une sauvegarde automatique de la base de donnée</h3>
                    <div className="flex items-center justify-around flex-wrap">
                        <p className="text-white text-justify font-light mb-3 mx-2 lg:mx-12">
                            Afin de garder une trace des données de la base de données Megacasting, il a fallu mettre en place une sauvegarde automatique de cette base de données.<br /><br />
                            Pour ce faire, j&apos;ai créer une tâche automatisée sur le serveur de la base de données qui exécutait un fichier Powershell. Ce fichier réalisait un &apos;Dump&apos; de la base de données toute les heures et supprimait la sauvegarde la plus vieille pour garder seulement les 25 dernières sauvegardes.
                            <br /><br />
                            Le script powershell utilisé et la tâche planifiée :
                        </p>
                        <div className="flex flex-wrap mx-3 justify-around items-center w-full">
                            <div className="border border-gray-500 rounded py-2 px-4 mb-3">
                                <h3 className="text-gray-300 mb-2">Code de sauvegarde : </h3>
                                <p className="text-gray-400 font-extralight text-sm break-words">
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
                            <Image className="rounded" width={402} height={182} alt="" src="/img/page1_1.png"></Image>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-12 lg:mx-12 xl:mx-24 2xl:mx-64 mx-2 border border-gray-700 border-2 rounded-lg p-5">
                    <h3 className="text-white text-2xl mx-auto mb-10">Mise en place d&apos;un Active Directory</h3>
                    <div className="flex items-center justify-around flex-wrap">
                        <p className="text-white text-justify font-light mb-3 mx-2 lg:mx-12">
                            Durant ma formation à l&apos;IIA, j&apos;ai appris à mettre en place un Active Directory. Ainsi, j&apos;ai créé plusieurs utilisateurs que j&apos;ai assigné à plusieurs groupes afin de gérer leurs privilèges dans le domaine. Leurs privilèges étant l&apos;accès à certains dossiers ou l&apos;accès au panneau de configuration.
                        </p>
                        <div className="flex flex-wrap items-center justify-around w-full mx-2 lg:mx-12">
                            <Image className="mb-3 rounded" width={466} height={111} alt="" src="/img/page1_2.png"></Image>
                            <Image className="mb-3 rounded" width={468} height={188} alt="" src="/img/page1_3.png"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page1;