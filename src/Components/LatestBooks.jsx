import React from "react";

const LatestBooks = () => {
  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgf9A-mXBMyLtQO6kc1kFWwqgd3VHM_ETroKDAFpN8VHWkh4d6F_hTCVf-kK6P4m6RAhh_xFtoqejNy-8IsN1EnH63qDMVvQ9Q_GDzHGmeUFC5KBz3_uDioWpmv-A0nsExFF65hRjiYhgxeZzDHtyivIqbATHZfKzyquXC0ND7aouMazMoIayBWcxyywOCuDOZrL2X4ozTiTClhL2W3fc_3bdKQCHOR-Vblnz7HHxCw9i4gJo2x4Sx5RgByEbtN_Ca0nv6adLYw",
    },
    {
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoyU0cHXrGNO-vGCaVBAhGxsXL94xQHlM6sbZMgM-z-_JyYpJkV7yYHYnIne4x5bsnxD5rgreYTK5h_vbuNxxcpqZHE54Nj2Riq71e0noqfEODcWYEHDFyayvLZNmc2Awxsoj79tOjVZvb42mNWsWJv3prZPBRme8nYMblDjVIsD-EdXdc3jy6T4cJZ8JvEXhzQQ96FB1p33bRDURahfi6h84ZMohR50LYIAgdELb9bP6kwG_murU2wCAkPF1sHey5MUcjjxapseM",
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPueau9KBvbHPqc87K_BveMAi-x_fuw6g3Qyksi8wMzbK86I7xAeFQQ0tVlUZF6uUMm_38nvdN15EDeYQYTGikcGCVYHz5E-0lsP9hOTTEbi6Bj5Avx78_PmOA6gBSmVrYOWYZubEk2m_nYDSc8dx4Cj6yBIQu32Giq-gm0l2lVO6JtTdsR4C7iyiLVCk3trChfddRhsq3wMlZ5CNU88ZhPbbyALqfplo7K53glyTs0RVu-H2uTx-Z3kZGmEylpce7PbRfNXR1WTw",
    },
    {
      title: "The Four Winds",
      author: "Kristin Hannah",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjgokiNTwwofYKuSz1PTsgauXIirSQhVSCfix2JGmc2lEiDU--knoJMLuSzgqHHWNRq5LhMZI9Zgli0zfdELVz_-h-mhS-9DuLWTG4AWLcgrdT92FMubPAzwp2oQzQIZqDa9wcYrPVY2cW97VO9FkKQsLnEALCBRNOhvirPLUn_Wx55yMHdc2rCE3VHocAmPyXsUC8pASE4nxJVBNhyk8uh6ksvZAagDEhiitkfJZqzts9sB6DybVEPn89hGQrgzynHmiHVcKtA8k",
    },
    {
      title: "Crying in H Mart",
      author: "Michelle Zauner",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQDqBG6YsI4fkykCO-DM-l7VwZRer8xE7lufZ5IJRQMIevsiwE4jrjxy3Mt49ydKBW3RU0Hm474l_fxGLdJ8SMdTK0cs8_lNH6SeKQqWmEMjNze5LDFD03Kiu9oKBPEWEkjD2BljUFL-eW93WDsSDU47miyTOs2F5K5Bu9JFV5ZN4H-GmTOcGB9cGBZ5QlPHhpwsn6JxjlJpf4smk-_I6XSguKoquYW8ZhlPeK-a9mImxgdkPXgEVudYhY02OODiNWTfM8vAdGMQU",
    },
    {
      title: "The Vanishing Half",
      author: "Brit Bennett",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUEM__vclSDeRqIAqo6uWUKkGrWSM5JvNpUh_tL5yRpOpVx-yjQpu0KkWsNpEm5O9oWPnNHw7yc_T_-4CxtlwNEFDCJqVVhuTDlUFeAUQygeC06oxNI5-pWJmEFgAhOng2s7NW64Gb6nkUiUY-5ObCkuZtAs-6AuQzPVjaTP-A9FIbmoH_JLdQ4AVvB142IOKYXdB5B4YDwijZkQR7YLrudEV-PNdqT4kTykcNqg_0lruE8TxEiPJ2UlmLTdBepfOR3RIpcxKrWPs",
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 bg-white dark:bg-slate-900">
      {/* Header with View All button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] dark:text-slate-50">
            Explore Our Latest Arrivals
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Fresh off the press and ready for you to discover.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <button className="px-6 py-3 border border-gray-500 bg-primary text-white hover:cursor-pointer font-semibold rounded-xl hover:bg-slate-700 hover:border-slate-700 transition">
            View All Books
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 group cursor-pointer"
          >
            <div
              className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300"
              style={{ backgroundImage: `url("${book.img}")` }}
            ></div>
            <div>
              <p className="text-base font-medium text-[#0d141b] dark:text-slate-50 truncate">
                {book.title}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {book.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBooks;
