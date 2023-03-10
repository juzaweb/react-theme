import { useEffect, useState } from "react";
import Banner from "../../views/components/sidebars/Banner";
import Popular from "../../views/components/sidebars/Popular";
import { getSidebar } from "../context/DataHelper";

export default function DynamicSidebar(props: {name: string}) {
    const [widgets, setWidgets] = useState<Array<any>>();

    useEffect(() => {
        getSidebar(props.name).then((res) => setWidgets(res.data));
    }, []);

    return <>
    {widgets?.map(
        function(item, index) {
            switch (item.widget) {
                case 'banner':
                    return <Banner key={index.toString()} data={item}></Banner>
                case 'popular':
                    return <Popular key={index.toString()} data={item}></Popular>
            }
        }
    )}
    </>;
}