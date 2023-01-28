import { useEffect, useState } from "react";
import Banner from "../../views/components/sidebars/Banner";
import { getSidebar } from "../context/DataHelper";

export default function DynamicBlock(props: {name: string}) {
    const [blocks, setBlocks] = useState<Array<any>>();

    useEffect(() => {
        getSidebar(props.name).then((res) => setBlocks(res.data));
    }, []);

    return <>
        {blocks?.map(
            function(item, index) {
                switch (item.block) {
                    case 'banner':
                        return <Banner key={index.toString()} data={item}></Banner>
                }
            }
        )}
    </>;
}