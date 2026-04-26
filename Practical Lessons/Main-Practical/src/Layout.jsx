

const Header = () => {
    return <h1>Header Component</h1>
}

const Footer = () => {
    return <h2>Footer Component</h2>
}

const WhychooseUs = () => {
    return (
        <h4> We are the best!.</h4>
    )
}

const Layout = () => {

    return (
        <div>
            <Header />
                        <main>
                            <h5>Main Content</h5>
                            <WhychooseUs />
                        </main>
            <Footer />
        </div>
    )
}

export default Layout;