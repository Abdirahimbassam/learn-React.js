

const Header = () => {
    return <h1>Header Component</h1>
}

const Footer = () => {
    return <h2>Footer Component</h2>
}

const WhyChooseUs = () => {
    return <h4>Header Component</h4>
}

const Layout = () => {
    return (
        <div>
            <Header />
                        <main>
                            <h5>Main Content</h5>
                            <WhyChooseUs />
                        </main>
            <Footer />
        </div>
    )

}

export default Layout;