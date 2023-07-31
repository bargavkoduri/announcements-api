This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Create a .env file with below fields
MONGO_URL = 
DB_NAME = 

Run the script.py file to read data from the file and persist it into MongoDB

To access the api
 <table class="table table-striped">
        <thead>
            <th scope="col">route</th>
            <th scope="col">Description</th>
        </thead>
        <tbody>
          <tr>
            <td>
              /api/announcements?id=id1,id2&startdate='YYYY-MM-DD'&enddate='YYYY-MM-DD'
            </td>
            <td>
              <ul>
                <li>
          When all three parameters are mentioned returns the result for matching id's and posted date lying between startdate and enddate
                </li>
                <li>
                  when all three parameters are not mentioned returns all the announcements 
                </li>
                <li>
                  When id is not mentioned and both start and end dates are mentioned returns all announcements >= startdate and <= enddate
                </li>
                <li>
                  When either startdate or enddate is mentioned returns all announcements >= startdate or <= enddaate
                </li>
                <li>
                  When id is mentioned and either startdate or enddate is mentioned returns all announcements with matching id's and >= startdate or <= enddate
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              /api/announcements/critical?id=id1,id2&startdate='YYYY-MM-DD'&enddate='YYYY-MM-DD'
            </td>
            <td>
              Returns announcements as mentioned above.
              The only difference is returns announcements only if they are critical
            </td>
          </tr>
          <tr>
            <td>
              /api/announcements/recent
            </td>
            <td>
              Returns all the announcements made within the last 48 hours in descending order.
            </td>
          </tr>
        </tbody>
 </table>


 Vercel Deployment :- https://announcements-seven.vercel.app/
