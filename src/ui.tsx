import { render, Container, Text, VerticalSpace, SearchTextbox, Divider } from '@create-figma-plugin/ui'
import { h } from 'preact'
import { useState } from 'preact/hooks'

interface UiProps {
    solid: string[];
    regular: string[];
    brands: string[];
}

function Plugin({ solid, regular, brands }: UiProps) {
    const [state, setState] = useState<{ search: string }>({ search: '' })

    const solidFiltered = !state.search ? solid : solid.filter(i => i.toLowerCase().includes(state.search.toLowerCase()));
    const regularFiltered = !state.search ? regular : regular.filter(i => i.includes(state.search.toLowerCase()));
    const brandsFiltered = !state.search ? brands : brands.filter(i => i.includes(state.search.toLowerCase()));

    const handleChange = event => {
        setState(event);
        console.log(solidFiltered);

    };


    return (
        <Container space='medium'>
            <script src="https://kit.fontawesome.com/4b938e2bf3.js" crossOrigin="anonymous"></script>

            <SearchTextbox name='search' placeholder='Search for an icon' value={state.search} onChange={handleChange} ></SearchTextbox>


            <VerticalSpace space='medium' />
            <Text>Solid</Text>
            <VerticalSpace space='medium' />
            <Divider />
            <VerticalSpace space='medium' />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gap: '10px' }}>
                {solidFiltered.map(s => <div style={{ textAlign: 'center' }}>
                    {/* <i class={`fas fa-${s}`}></i> */}
                    s
                </div>)}
            </div>


            <VerticalSpace space='medium' />
            <Text>Regular</Text>
            <VerticalSpace space='medium' />
            <Divider />
            <VerticalSpace space='medium' />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gap: '10px' }}>
                {regularFiltered.map(s => <div style={{ textAlign: 'center' }}>
                    <i class={`far fa-${s}`}></i>
                </div>)}
            </div>


            <VerticalSpace space='medium' />
            <Text>Brands</Text>
            <VerticalSpace space='medium' />
            <Divider />
            <VerticalSpace space='medium' />
            <VerticalSpace space='medium' />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gap: '10px' }}>
                {brandsFiltered.map(s => <div style={{ textAlign: 'center' }}>
                    <i class={`fab fa-${s}`}></i>
                </div>)}
            </div>

            <VerticalSpace space='medium' />
        </Container>
    )
}

export default render(Plugin)