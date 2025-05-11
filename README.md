    npx shadcn@latest init
    npx shadcn@latest add button

    npm install next-themes
    npx shadcn@latest add dropdown-menu
    npm i @radix-ui/react-icons

#   sentry : degbug
    npx @sentry/wizard@latest -i nextjs --saas --org llc-hw --project nextjs-repairshop

#   authentication and login
    using kinde : npm i @kinde-oss/kinde-auth-nextjs

#   Connect Database: neon postgres aws
    ADD drizzle
        npm i drizzle-orm @neondatabase/serverless
        npm i -D drizzle-kit tsx dotenv

        `npm run db:generate` to create then 
        `npm run db:migrate` post to Neon
#   SQL DATA QUERIES
        UPDATE TICKETS SET tech = 'new-ticket@example.com'