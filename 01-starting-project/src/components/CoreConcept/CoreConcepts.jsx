import {CORE_CONCEPTS} from "../Data/data";
import {CoreConcept} from "./CoreConcept";
import Section from "../Section";

export default function CoreConcepts(){
    return (
        <Section title="ore Concept" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item}/>)}
            </ul>
        </Section>
    )
}