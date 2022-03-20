import { Box, CircularProgress, Container, TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllData } from './../AllApi/dataApi';


interface Column {
    id: "title" | "url" | "created_at" | "author",
    label: string,
    minWidth?: number,
    align?: "right"
}

const columns: readonly Column[] = [
    { id: "title", label: "Title", minWidth: 170 },
    { id: "url", label: "URL", minWidth: 150 },
    { id: "created_at", label: "Created At", minWidth: 100 },
    { id: "author", label: "Author", minWidth: 100 },
];

export interface InitPost {
    title: string,
    url: string,
    created_at: Date,
    author: string
}

const HomePage: React.FC = () => {
    const history = useHistory();
  
    const [PageNum, setPageNum] = useState<number>(0);
    const [localPage, setLocalPage] = useState<number>(1);
    const [totalData, setTotalData] = useState<number>(0);
    const [posts, setPosts] = useState<InitPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const rowsPerPage = 20;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setPageNum((_page) => _page + 1);
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      getAllPost();
    }, [PageNum]);
  
    const getAllPost = async () => {
      try {
        setIsLoading(true);
        const data = await getAllData(PageNum);
        const _posts = [...posts, ...data.hits];
        setPosts(_posts);
        setTotalData(_posts.length);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    };
  
    const handlePageChange = (e: unknown, newPage: number) => {
      setLocalPage(newPage);
    };
  
    const handlePagDetails = (post: InitPost) => {
      history.push("/post-details", post);
    };
  
    return (
      <Container data-testid="homePage">
        <h3 style={{ textAlign: "center" }} data-testid="postText">Post Table</h3>
        {isLoading ? (
          <Box style={{ textAlign: "center" }} data-testid="loading">
            <CircularProgress size={25} />
            <div data-testid="loadingText">Loading new Post Data...</div>
          </Box>
        ) : (
          <TableContainer component={Paper} >
            <Table style={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((column, i) => (
                    <TableCell
                      key={i}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.id}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {posts
                  .slice(
                    rowsPerPage * (localPage - 1),
                    rowsPerPage * (localPage - 1) + rowsPerPage
                  )
                  .map((row) => (
                    <TableRow
                      key={row.title}
                      onClick={() => handlePagDetails(row)}
                      style={{ cursor: "pointer" }}
                    >
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Pagination
          count={totalData / rowsPerPage}
          page={localPage}
          onChange={handlePageChange}
          data-testid="pagination"
        />
      </Container>
    );
  };
  
  export default HomePage;
  

// const Home: React.FC = () => {

//     const history = useHistory();

//     const rowsPerPage = 20;

//     const [posts, setPosts] = useState<InitPost[]>([]);

//     const [totalData, setTotalData] = useState<number>(0);

//     const [localPage, setLocalPage] = useState<number>(0);

//     const [isLoading, setIsLoading] = useState<boolean>(false);

//     const [pageNumb, setPageNumb] = useState<number>(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setPageNumb((_page) => _page + 1);
//         }, 10000);

//         return () => clearInterval(interval);
//     }, [])

//     useEffect(() => {
//         getAllPost();
//     }, [pageNumb])

//     const getAllPost = async () => {
//         try {
//             setIsLoading(true);
//             const data = await getAllData(pageNumb);
//             const _posts = [...posts, ...data.hits];
//             setPosts(_posts);
//             setTotalData(_posts.length);
//             setIsLoading(false);
//             console.log(posts);

//         } catch (e) {
//             setIsLoading(false);
//             console.log(e);
//         }
//     }

//     const handlePageChange = (e: unknown, newPage: number) => {
//         setLocalPage(newPage);
//     }

//     const handleDetails = (post: InitPost) => {
//         history.push("/post-details", post);
//     }

//     return (
//         <Container data-testid="home">
//         <h3 style={{ textAlign: "center" }}>Post Table</h3>
//         {isLoading ? (
//           <Box style={{ textAlign: "center" }}>
//             <CircularProgress size={25} />
//             Loading new Post Data...
//           </Box>
//         ) : (
//           <TableContainer component={Paper}>
//             <Table style={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   {columns.map((column, i) => (
//                     <TableCell
//                       key={i}
//                       align={column.align}
//                       style={{ minWidth: column.minWidth }}
//                     >
//                       {column.id}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {posts
//                   .slice(
//                     rowsPerPage * (localPage - 1),
//                     rowsPerPage * (localPage - 1) + rowsPerPage
//                   )
//                   .map((row) => (
//                     <TableRow
//                       key={row.title}
//                       onClick={() => handleDetails(row)}
//                       style={{ cursor: "pointer" }}
//                     >
//                       {columns.map((column) => (
//                         <TableCell
//                           key={column.id}
//                           align={column.align}
//                           style={{ minWidth: column.minWidth }}
//                         >
//                           {row[column.id]}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//         <Pagination
//           count={totalData / rowsPerPage}
//           page={localPage}
//           onChange={handlePageChange}
//         />
//       </Container>
//     );
// };

// export default Home;