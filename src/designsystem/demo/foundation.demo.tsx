import React from 'react';
import makeText, {TextType} from "../foundation/text/textType";
import Icon, {IconType} from "../foundation/icon";
import styled from "styled-components";
import {allCasesOfEnum} from "../../util/enum.util";

function FoundationDemo() {
    return (
        <div>
            {allCasesOfEnum(TextType).map((text) => (
                <Text text={text}>가나다라마바사ABCDEFG</Text>
            ))}
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                {allCasesOfEnum(IconType)
                    .map((icon) => (
                        <Icon type={icon} size={48} tint={'gray'}/>
                    ))}
            </div>
        </div>
    );
}

const Text = styled.div<{ text: TextType }>`
    ${({text}) => makeText(text)};
`;

export default FoundationDemo;