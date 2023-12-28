  "use client";

  import { deleteCar, fetchData } from "@/Structure/ApiHandler";
  import Loading from "@/components/user_components/Loading";
  import Link from "next/link";
  import { useEffect, useState } from "react";
  import { AiFillEdit } from "react-icons/ai";
  import { MdDeleteForever } from "react-icons/md";
  import { useSelector } from "react-redux";

  const Cars = () => {
    const [data, setData] = useState([]);
    const [deleteId, setDeleteId] = useState("");
    const [mount, setMount] = useState(false);
    const [isDeleteModal, setIsDeleteModal] = useState(false);
    const [filteredData,setFilteredData] = useState([])

    const searchQuery = useSelector((state) => state.searchQuery);

    useEffect(() => {
      
      const newData = data.filter((item) => {
        const make = item.make.toLowerCase();
        return make.startsWith(searchQuery.toLowerCase());
      });
      setFilteredData(newData);
    }, [searchQuery,data]);

    useEffect(() => {
      async function fetchDataAndShowData() {
        const result = await fetchData();
        setData(result);
        setFilteredData(result)
        setMount(true);
      }
      fetchDataAndShowData();
    }, []);

    function handleDelete(id) {
      setDeleteId(id);
      setIsDeleteModal(true);
    }
    async function handleModalDelete() {
      const newData = await deleteCar(deleteId);
      setData(newData);
      setDeleteId(null);
      setIsDeleteModal(false);
    }

    if (!mount) return <Loading/>;
    return (
      <div className="text-black dark:text-white min-h-screen">
        {isDeleteModal && (
          <>
            <div
              id="hs-static-backdrop-modal"
              className="hs-overlay  w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto [--overlay-backdrop:static]"
              data-hs-overlay-keyboard="false"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      Delete
                    </h3>
                    <button
                      type="button"
                      className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      data-hs-overlay="#hs-static-backdrop-modal"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={() => setIsDeleteModal(false)}
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4 overflow-y-auto">
                    <p className="mt-1 text-gray-800 dark:text-gray-400">
                      Are you sure you want to delete this car ?
                    </p>
                  </div>
                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                    <button
                      onClick={() => setIsDeleteModal(false)}
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      data-hs-overlay="#hs-static-backdrop-modal"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleModalDelete}
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <p className="text-2xl p-2">Available Cars</p>
        <div>
          {filteredData.map(({ _id: id, make: carName, images, price: rent }) => {
            return (
              <div
                key={id}
                className={`border shadow-emerald-200 flex items-center mx-2 justify-between my-1  rounded-md p-2 text-center `}
              >
                <img
                  src={images[0]}
                  alt={carName}
                  className="w-24 imageResponsive h-24 rounded-md"
                />
                <p className="w-28 text__responsive">{carName}</p>
                <p className="rentResponsive">{rent}$</p>

                <div className="flex editDeleteResponsive items-center gap-2">
                  <Link
                    href={`/admin/edit-car?id=${id}`}
                    className="bg-transparent border border-green-500  hidden sm:block px-4 py-0.5 rounded-md hover:bg-green-500 hover:text-white transition-all duration-200 font-semibold"
                  >
                    Edit
                  </Link>
                  <button className="bg-emerald-400 edit__responsive sm:hidden px-4 py-1 rounded-sm hover:bg-emerald-500">
                    <AiFillEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(id)}
                    className="bg-transparent border border-red-500 px-4 py-0.5 hidden sm:block rounded-md hover:bg-red-500 hover:text-white transition-all duration-200 font-semibold"
                  >
                    Delete
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-400 px-4 edit__responsive  sm:hidden py-1 rounded-sm hover:bg-red-500"
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  export default Cars;
